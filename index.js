function createTable(index, tableWrapper) {
    function getTime(timeString = '0:0:000') {
        const parts = timeString.split(':')
        if (parts.length < 3) {
            return { m: 0, s: 0, ms: 0 }
        }
        return {
            m: +parts[0],
            s: +parts[1],
            ms: +parts[2],
        }
    }
    
    function zeroPad(str, len) {
        let result = ''
        for (let i = 0; i < len - str.toString().length; i++) {
            result += '0'
        }
        return result + str
    }
    
    function getTimeString(time) {
        return `${zeroPad(time.m, 2)}:${zeroPad(time.s, 2)}:${zeroPad(time.ms, 3)}`
    }
    
    function subtractTimes(fromStr, whatStr) {
        const from = getTime(fromStr)
        const what = getTime(whatStr)
    
        const result = {
            m: from.m - what.m,
            s: from.s - what.s,
            ms: from.ms - what.ms,
        }
    
        if (result.ms < 0) {
            result.ms += 1000
            result.s--
        }
        if (result.s < 0) {
            result.s += 60
            result.m--
        }
    
        return getTimeString(result)
    }
    
    function addTimes(fromStr, whatStr) {
        const from = getTime(fromStr)
        const what = getTime(whatStr)
    
        const result = {
            m: from.m + what.m,
            s: from.s + what.s,
            ms: from.ms + what.ms,
        }
    
        if (result.ms >= 1000) {
            result.ms -= 1000
            result.s++
        }
        if (result.s >= 60) {
            result.s -= 60
            result.m++
        }
    
        return getTimeString(result)
    }
    
    function addRow(tableElement) {
        const row = rowCount++
        const rowElement = document.createElement('div')
        rowElement.className = 'row'
    
        if (!table[row]) {
            table[row] = {}
        }
    
        addField(rowElement, row, 'index', undefined, undefined, 'Номер')
        addField(rowElement, row, 'name', undefined, undefined, 'Имя')
    
        const trialBlockElement = document.createElement('div')
        trialBlockElement.className = 'trialBlock'
        rowElement.appendChild(trialBlockElement)
    
        if (!table[row].trials) {
            table[row].trials = []
        }
        for (let i = 0; i < 2; i++) {
            if (!table[row].trials[i]) {
                table[row].trials[i] = {}
            }
            addTrial(trialBlockElement, row, i)
        }
    
        addField(rowElement, row, 'bestTime', undefined, undefined, 'Лучшее время')
    
        tableElement.appendChild(rowElement)
    }
    
    function addTrial(trialBlockElement, row, number) {
        const trialElement = document.createElement('div')
        trialElement.className = 'trial'
    
        addField(undefined, row, 'startTime', trialElement, number, 'Старт')
        addField(undefined, row, 'endTime', trialElement, number, 'Финиш')
        addField(undefined, row, 'pureTime', trialElement, number, 'Время')
        for (let i = 11; i < gateNumber; i++) {
            const element = addField(undefined, row, `gate${i+1}`, trialElement, number, i-10)
            element.classList.add('gate')
        }
        addField(undefined, row, 'totalTime', trialElement, number, 'Итог')
    
        trialBlockElement.appendChild(trialElement)
    }
    
    function addField(rowElement, row, name, trialElement, trial, placeholder) {
        const fieldElement = document.createElement('input')
        fieldElement.type = 'text'
        fieldElement.className = 'field'
        fieldElement.placeholder = placeholder || name
    
        fieldElement.onchange = e => {
            setFieldValue(row, name, trial, e.target.value)
        }
    
        fieldElements.set(`${row}${trial}${name}`, fieldElement)
    
        if (trialElement) {
            trialElement.appendChild(fieldElement)
        } else {
            rowElement.appendChild(fieldElement)
        }
    
        return fieldElement
    }
    
    function getFieldValue(row, name, trial) {
        if (trial !== undefined) {
            obj = table[row].trials[trial]
        } else {
            obj = table[row]
        }
        return obj[name]
    }
    
    function setFieldValue(row, name, trial, value, clear) {
        const fieldElement = fieldElements.get(`${row}${trial}${name}`)
        if (!fieldElement) {
            return
        }
        let obj
        if (trial !== undefined) {
            obj = table[row].trials[trial]
        } else {
            obj = table[row]
        }
        if (value.includes(':')) {
            value = getTimeString(getTime(value))
        }
    
        obj[name] = value
    
        fieldElement.value = clear ? '' : (value || '')
        if (clear) {
            return
        }
    
        //calculating different fields
        if (trial !== undefined) {
            if (name === 'startTime' || name === 'endTime') {
                const startTime = getFieldValue(row, 'startTime', trial) || '00:00:000'
                const endTime = getFieldValue(row, 'endTime', trial) || '00:00:000'
                if (startTime !== '00:00:000' && endTime !== '00:00:000') {
                    const pureTime = subtractTimes(
                        endTime,
                        startTime
                    )
                    setFieldValue(row, 'pureTime', trial, pureTime)
                } 
            }
            if (name === 'pureTime' || name.includes('gate')) {
                let totalTime = getFieldValue(row, 'pureTime', trial)
                for (let i = 11; i < gateNumber; i++) {
                    const gateTime = getFieldValue(row, `gate${i+1}`, trial) || 0
                    totalTime = addTimes(
                        totalTime,
                        `0:${gateTime}:0`
                    )
                }
                setFieldValue(row, 'totalTime', trial, totalTime)
            }
            if (name === 'totalTime') {
                const firstTrial = getFieldValue(row, 'totalTime', 0) || '59:59:999'
                const secondTrial = getFieldValue(row, 'totalTime', 1) || '59:59:999'
    
                const isFirstTimeBigger = getTime(subtractTimes(firstTrial, secondTrial)).m >= 0
                let bestTime = isFirstTimeBigger ? secondTrial : firstTrial
    
                setFieldValue(row, 'bestTime', undefined, bestTime)
            }
        }
    
        localStorage.setItem(`table${index}`, JSON.stringify(table))
    }
    
    function printTable(tableElement, clear = false) {
        table.forEach((rowData, row) => {
            if (rowCount <= row) {
                addRow(tableElement)
            }
            for (let key of Object.getOwnPropertyNames(rowData)) {
                if (key === 'trials') {
                    rowData.trials.forEach((trialData, trial) => {
                        for (let key of Object.getOwnPropertyNames(trialData)) {
                            setFieldValue(row, key, trial, trialData[key], clear)
                        }
                    })
                } else {
                    setFieldValue(row, key, undefined, rowData[key], clear)
                }
            }
        })
    }
    
    const tableElement = document.createElement('div')
    tableElement.className = 'table'
    tableWrapper.appendChild(tableElement)
    
    const fieldElements = new Map()
    const gateNumber = 14
    
    let rowCount = 0
    let table = JSON.parse(localStorage.getItem(`table${index}`)) || []
    if (table.length > 0) {
        printTable(tableElement)
    } else {
        addRow(tableElement)
    }
    
    const addButton = document.createElement('button')
    addButton.innerHTML = 'Добавить участника'
    tableWrapper.appendChild(addButton)
    addButton.onclick = () => addRow(tableElement)
    
    const sortButton = document.createElement('button')
    sortButton.innerHTML = 'Сортировать по лучшему времени'
    tableWrapper.appendChild(sortButton)
    sortButton.onclick = () => {
        printTable(tableElement, true)
        table.sort((e1, e2) => {
            const kek = getTime(subtractTimes(
                e1.bestTime || '59:59:999',
                e2.bestTime || '59:59:999',
            )).m
            return kek >= 0 ? 1: -1
        })
        printTable(tableElement)
    }
    const clearButton = document.createElement('button')
    clearButton.innerHTML = 'Удалить таблицу'
    tableWrapper.appendChild(clearButton)
    clearButton.onclick = () => {
        const result = confirm('Действительно удалить таблицу? Все записи будут стерты.')
        if (result) {
            document.body.removeChild(tableWrapper)
            localStorage.removeItem(`table${index}`)
        }
    }
}

let tableCount = localStorage.getItem('tableCount') || 0

const createTableBtn = document.createElement('button')
createTableBtn.innerHTML = 'Создать таблицу'
document.body.appendChild(createTableBtn)

for (let i = 0; i < tableCount; i++) {
    if (localStorage.getItem(`table${i}`)) {
        const tableWrapper = document.createElement('div')
        tableWrapper.className = 'tableWrapper'
        document.body.insertBefore(tableWrapper, createTableBtn)
        createTable(i, tableWrapper)
    }
}

createTableBtn.onclick = () => {
    const tableWrapper = document.createElement('div')
    tableWrapper.className = 'tableWrapper'
    document.body.insertBefore(tableWrapper, createTableBtn)
    createTable(tableCount, tableWrapper)
    localStorage.setItem(`table${tableCount}`, '[]')
    tableCount++
    localStorage.setItem('tableCount', tableCount)
}

document.querySelector('#export').value = JSON.stringify(localStorage)

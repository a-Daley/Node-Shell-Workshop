process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()

    if (cmd === 'pwd') {
        const current = process.cwd()
        process.stdout.write(current)
    }
    
    process.stdout.write('\nprompt > ')
})
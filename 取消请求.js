let controller
input.output = async () => {
    controller && controller.abort()
    controller = new AbortController()
    const list = await fetch('https://jsonplaceholder.typicode.com/todos', {
        signal: controller.signal
    }).then((res) => res.json())
    controller.abort()
    console.log(list)

}
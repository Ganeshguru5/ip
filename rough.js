let data = []
 let size = data.length;

    while(size > 1) {
        data.push(this.queue.shift());
        size--;
    }
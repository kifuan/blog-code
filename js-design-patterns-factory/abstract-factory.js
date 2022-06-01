class Sharer {
    constructor({msg, link}) {
        this.msg = msg
        this.link = link
    }

    share() {}
}

class WeChatSharer extends Sharer {
    share() {
        console.log(`Sharing ${this.msg} from ${this.link} via WeChat`)
    }
}

class QQSharer extends Sharer {
    share() {
        console.log(`Sharing ${this.msg} from ${this.link} via QQ`)
    }
}

class AbstractSharerFactory {
    types = {}

    createSharer(type, options) {
        const cls = this.types[type]
        return cls ? new cls(options) : undefined
    }
    
    registerSharer(type, sharer) {
        this.types[type] = sharer
    }
}

const factory = new AbstractSharerFactory()

factory.registerSharer('qq', QQSharer)
factory.registerSharer('wechat', WeChatSharer)

factory.createSharer('qq', {
    msg: 'msg1',
    link: 'https://example.com'
}).share()
// Sharing msg1 from https://example.com via QQ

factory.createSharer('wechat', {
    msg: 'msg2',
    link: 'https://baidu.com'
}).share()
// Sharing msg2 from https://baidu.com via WeChat

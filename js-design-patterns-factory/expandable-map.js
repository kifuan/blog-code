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

class Factory {
    types = {}

    register(type, cls) {
        this.types[type] = cls
    }

    create(type, options) {
        const cls = this.types[type]
        return cls ? new cls(options) : undefined
    }
}

const factory = new Factory()
factory.register('qq', QQSharer)
factory.register('wechat', WeChatSharer)

factory.create('qq', {
    msg: 'msg1',
    link: 'https://example.com'
}).share()
// Sharing msg1 from https://example.com via QQ

factory.create('wechat', {
    msg: 'msg2',
    link: 'https://baidu.com'
}).share()
// Sharing msg2 from https://baidu.com via WeChat

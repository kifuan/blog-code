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
    create(type, options) {
        if (type === 'qq') {
            return new QQSharer(options)
        }
    }
}

class ExpandedFactory extends Factory {
    create(type, options) {
        if (type === 'wechat') {
            return new WeChatSharer(options)
        }
        return super.create(type, options)
    }
}

const factory = new ExpandedFactory()

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

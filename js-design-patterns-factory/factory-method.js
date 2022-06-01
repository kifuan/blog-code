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

function createSharer(options) {
    switch (options.type) {
        case 'qq':
            return new QQSharer(options)
        case 'wechat':
            return new WeChatSharer(options)
    }
    throw new Error(`unknown type: ${options.type}`)
}

createSharer({
    type: 'qq',
    msg: 'msg1',
    link: 'https://example.com'
}).share()
// Sharing msg1 from https://example.com via QQ

createSharer({
    type: 'wechat',
    msg: 'msg2',
    link: 'https://baidu.com'
}).share()
// Sharing msg2 from https://baidu.com via WeChat
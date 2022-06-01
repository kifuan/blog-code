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

class SharerFactory {
    create(options) {}
}

class QQSharerFactory extends SharerFactory {
    create(options) {
        return new QQSharer(options)
    }
}

class WeChatSharerFactory extends SharerFactory {
    create(options) {
        return new WeChatSharer(options)
    }
}

function share(factory) {
    factory.create({
        msg: 'msg1',
        link: 'https://example.com'
    }).share()
}

share(new QQSharerFactory())
// Sharing msg1 from https://example.com via QQ

share(new WeChatSharerFactory())
// Sharing msg2 from https://baidu.com via WeChat

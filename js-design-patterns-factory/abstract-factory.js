class UIFactory {
    createNavbar() {}

    createContent() {}
}

class MobileUIFactory extends UIFactory {
    createNavbar() {
        return { position: 'top' }
    }

    createContent() {
        return { direction: 'vertical' }
    }
}

class DesktopUIFactory extends UIFactory {
    createNavbar() {
        return { position: 'left' }
    }

    createContent() {
        return { direction: 'horizontal' }
    }
}


function getFactory() {
    if (window.innerWidth < 1000) {
        return new MobileUIFactory()
    }
    return new DesktopUIFactory()
}

const factory = getFactory()
factory.createContent()
factory.createNavbar()

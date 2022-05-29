const { proxy, revoke } = Proxy.revocable({}, {})

proxy.foo = 1
console.log(proxy.foo)
// 1

revoke()
console.log(proxy.foo)
// TypeError: Cannot perform 'get' on a proxy that has been revoked
exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['specs/edit.spec.js', 'specs/gitUser.spec.js'],
    SELENIUM_PROMISE_MANAGER: false,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    },
}
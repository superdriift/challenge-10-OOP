const Employee = require('../library/employee')

describe('Test Employee Class', () => {
    it('should create a new employee object', () => {
        const me = new Employee('julian', 7, 'jk@gmail.com');

        expect(typeof me).toBe('object');
    }) 

    it('can set a name via constructor', () => {
        const me = new Employee('julian', 7, 'jk@gmail.com');

        expect(me.name).toBe('julian')
    })

    it('can set an id via constructor', () => {
        const me = new Employee('julian', 7, 'jk@gmail.com');

        expect(me.id).toBe(7)
    })

    it('can set a name via constructor', () => {
        const me = new Employee('julian', 7, 'jk@gmail.com');

        expect(me.email).toBe('jk@gmail.com')
    })

    it('can retrieve the name of an employee via method', () => {
        const me = new Employee('julian', 7, 'jk@gmail.com');

        expect(me.getName()).toBe('julian')
    })

    it('can retrieve the ID of an employee via method', () => {
        const me = new Employee('julian', 7, 'jk@gmail.com');

        expect(me.getId()).toBe(7)
    })

    it('can retrieve the E-Mail address of an employee via method', () => {
        const me = new Employee('julian', 7, 'jk@gmail.com');

        expect(me.getEmail()).toBe('jk@gmail.com')
    })

    it('can retrieve the role of an employee via method', () => {
        const me = new Employee('julian', 7, 'jk@gmail.com');

        expect(me.getRole()).toEqual('Employee')
    })
})
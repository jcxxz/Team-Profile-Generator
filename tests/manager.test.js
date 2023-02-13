const Manager = require('../lib/manager');

describe('manager', () => {
    let manager;
    beforeEach(() => {
        manager = new Manager('name', 'email', 'id', 'officeNumber');
    })
    it('should return the name', () => {
        expect(manager.getName()).toBe('name');
    });
    it('should return the office number', () => {
        expect(manager.getOfficeNumber()).toBe('officeNumber');
    });
    it('should return the id', () => {
        expect(manager.getId()).toBe('id');
    });
    it('should return the email', () => {
        expect(manager.getEmail()).toBe('email');
    });
    it('should return the manager', () => {
        expect(manager.getRole()).toBe('Manager');
    });
})
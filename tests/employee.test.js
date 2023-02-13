
// const { describe, beforeEach, it, expect } = require('jest');
const Employee = require('../lib/employee');

describe('employee', () => {
    let employee;
    beforeEach(() => {
        employee = new Employee('name', 'email', 'id');
    })
    it('should return the name', () => {
        expect(employee.getName()).toBe('name');
    });

    it('should return the id', () => {
        expect(employee.getId()).toBe('id');
    });
    it('should return the email', () => {
        expect(employee.getEmail()).toBe('email');
    });
    it('should return the employee', () => {
        expect(employee.getRole()).toBe('Employee');
    });
})

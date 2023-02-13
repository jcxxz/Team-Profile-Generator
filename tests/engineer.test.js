const Engineer = require('../lib/engineer');

describe('engineer', () => {
    let engineer;
    beforeEach(() => {
        engineer = new Engineer('name', 'email', 'id', 'github');
    })
    it('should return the name', () => {
        expect(engineer.getName()).toBe('name');
    });
    it('should return the github', () => {
        expect(engineer.getGithub()).toBe('github');
    });
    it('should return the id', () => {
        expect(engineer.getId()).toBe('id');
    });
    it('should return the email', () => {
        expect(engineer.getEmail()).toBe('email');
    });
    it('should return the engineer', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });
})
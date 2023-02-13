const Intern = require('../lib/intern');

describe('intern', () => {
    let intern;
    beforeEach(() => {
        intern = new Intern('name', 'email', 'id', 'school');
    })
    it('should return the name', () => {
        expect(intern.getName()).toBe('name');
    });
    it('should return the school', () => {
        expect(intern.getSchool()).toBe('school');
    });
    it('should return the id', () => {
        expect(intern.getId()).toBe('id');
    });
    it('should return the email', () => {
        expect(intern.getEmail()).toBe('email');
    });
    it('should return the intern', () => {
        expect(intern.getRole()).toBe('Intern');
    });
})
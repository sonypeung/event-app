import {isDefined, isValidEmail} from './Event.Form.Validation';
import expect from 'expect';

describe('Event.Form.Validation.js isDefined function', () => {
    it('should return false when used with an empty value: ', ()=> {
        expect(isDefined('')).toBeFalsy();
        expect(isDefined(null)).toBeFalsy();
        expect(isDefined(undefined)).toBeFalsy();
    })

    it('should return true when used with anon empty value: ', ()=> {
        expect(isDefined('sony')).toBeTruthy();
        expect(isDefined('123')).toBeTruthy();
    })

})

describe('Event.Form.Validation.js isValidEmail function', () => {
    it('should not validate when there is no @ character: ', ()=> {
        expect(isValidEmail('test.test.fr')).toBeFalsy();
    })

    it('should not validate when there is a . after the @: ', ()=> {
        expect(isValidEmail('test.test@.fr')).toBeFalsy();
    })

    it('should not validate when there is no character before @: ', ()=> {
        expect(isValidEmail('@sony.fr')).toBeFalsy();
    })

    it('should not validate when there is 1 character domain after a . : ', ()=> {
        expect(isValidEmail('sony@gmail.f')).toBeFalsy();
    })

    it('should not validate when email starts with . : ', ()=> {
        expect(isValidEmail('.sony@gmail.fr')).toBeFalsy();
    })

    it('should not validate when there is special character : ', ()=> {
        expect(isValidEmail('sony()#@gmail.fr')).toBeFalsy();
    })

    it('should not validate when double dots are used : ', ()=> {
        expect(isValidEmail('sony..test@gmail.fr')).toBeFalsy();
    })

    it('should validate when using number : ', ()=> {
        expect(isValidEmail('sony123456789@gmail.fr')).toBeTruthy();
    })

    it('should validate when using A to Z letter, both undercase and uppercase : ', ()=> {
        expect(isValidEmail('abcdefghijklmnopqrstuvwxyz@gmail.fr')).toBeTruthy();
        expect(isValidEmail('AZERTYUIOPQSDFGHJKLMWXCVBN@gmail.fr')).toBeTruthy();
    })

    it('should validate when using underscore character : ', ()=> {
        expect(isValidEmail('sony_peung@gmail.fr')).toBeTruthy();
    })

})
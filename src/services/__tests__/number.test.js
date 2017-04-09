import { mathRound, isNumber } from '../number'

describe( 'services number', () => {
  const number = 100000
  it( 'mathRound', () => {
    const expectedNewNumberDigit2 = '100,000.00'
    const expectedNewNumberDigit4 = '100,000.0000'

    const newNumber = mathRound( number )
    const newNumberWithDigit = mathRound( number, 4 )
    expect( newNumber ).toEqual( expectedNewNumberDigit2 )
    expect( newNumberWithDigit ).toEqual( expectedNewNumberDigit4 )
  } )

  it( 'isNumber', () => {
    const expectedNotNumber = '-'
    const expectedNewNumber = 100000

    const newNumber = isNumber( number )
    const newFloat = isNumber( 100000.0000 )
    const undefinedValue = isNumber( undefined )
    const nullValue = isNumber( null )
    const string1Value = isNumber( 'Foo' )
    // const string2Value = isNumber( '123' )
    // const string3Value = isNumber( 'Foo123' )
    // const string4Value = isNumber( '123Foo' )
    const EmptySrtingValue = isNumber( '' )
    const arrayValue = isNumber( [] )
    const objectValue = isNumber( {} )
    const func = isNumber( () => {} )

    expect( newNumber ).toBe( expectedNewNumber )
    expect( newNumber ).toEqual( expectedNewNumber )

    expect( newFloat ).toBe( expectedNewNumber )

    expect( undefinedValue ).toEqual( expectedNotNumber )
    expect( nullValue ).toEqual( expectedNotNumber )
    expect( string1Value ).toEqual( expectedNotNumber )
    // expect( string2Value ).toEqual( expectedNotNumber )
    // expect( string3Value ).toEqual( expectedNotNumber )
    // expect( string4Value ).toEqual( expectedNotNumber )
    expect( EmptySrtingValue ).toEqual( expectedNotNumber )
    expect( arrayValue ).toEqual( expectedNotNumber )
    expect( objectValue ).toEqual( expectedNotNumber )
    expect( func ).toEqual( expectedNotNumber )
  } )

  it( 'isNumber default 0', () => {
    const expectedNotNumber = 0
    const expectedNewNumber = 100000

    const newNumber = isNumber( number, 0 )
    const newFloat = isNumber( 100000.0000, 0 )
    const undefinedValue = isNumber( undefined, 0 )
    const nullValue = isNumber( null, 0 )
    const string1Value = isNumber( 'Foo', 0 )
    // const string2Value = isNumber( '123', 0 )
    // const string3Value = isNumber( 'Foo123', 0 )
    // const string4Value = isNumber( '123Foo', 0 )
    const EmptySrtingValue = isNumber( '', 0 )
    const arrayValue = isNumber( [], 0 )
    const objectValue = isNumber( {}, 0 )
    const func = isNumber( () => {}, 0 )

    expect( newNumber ).toBe( expectedNewNumber )
    expect( newNumber ).toEqual( expectedNewNumber )

    expect( newFloat ).toBe( expectedNewNumber )

    expect( undefinedValue ).toEqual( expectedNotNumber )
    expect( nullValue ).toEqual( expectedNotNumber )
    expect( string1Value ).toEqual( expectedNotNumber )
    // expect( string2Value ).toEqual( expectedNotNumber )
    // expect( string3Value ).toEqual( expectedNotNumber )
    // expect( string4Value ).toEqual( expectedNotNumber )
    expect( EmptySrtingValue ).toEqual( expectedNotNumber )
    expect( arrayValue ).toEqual( expectedNotNumber )
    expect( objectValue ).toEqual( expectedNotNumber )
    expect( func ).toEqual( expectedNotNumber )
  } )
} )

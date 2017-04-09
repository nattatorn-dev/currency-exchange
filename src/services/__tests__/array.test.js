import { deleteByIndex, findAndReplace, pop, shift, splice } from '../array'

describe( 'services array', () => {
  const array = [ 'USD', 'JPY', 'GBP', 'IDR', 'CNY' ]
  it( 'deleteByIndex', () => {
    const expectedNewArray = [ 'USD', 'JPY', 'GBP', 'CNY' ]
    const newArray = deleteByIndex( array, 3 )
    expect( newArray ).toEqual( expectedNewArray )
    expect( newArray ).not.toBe( expectedNewArray )
  } )

  it( 'findAndReplace', () => {
    const expectedNewArray = [
      'USD1',
      'USD2',
      'USD3',
      'JPY',
      'GBP',
      'IDR',
      'CNY',
    ]
    const newArray = findAndReplace( array, 'USD', [ 'USD1', 'USD2', 'USD3' ] )
    expect( newArray ).not.toBe( expectedNewArray )
    expect( newArray ).toEqual( expectedNewArray )
  } )

  it( 'pop', () => {
    const expectedNewArray = [ 'USD', 'JPY', 'GBP', 'IDR' ]
    const newArray = pop( array )
    expect( newArray ).not.toBe( expectedNewArray )
    expect( newArray ).toEqual( expectedNewArray )
  } )

  it( 'shift', () => {
    const expectedNewArray = [ 'JPY', 'GBP', 'IDR', 'CNY' ]
    const newArray = shift( array )
    expect( newArray ).not.toBe( expectedNewArray )
    expect( newArray ).toEqual( expectedNewArray )
  } )

  it( 'splice', () => {
    const expectedNewArray = [ 'USD', 'JPY', 'USD1', 'IDR', 'CNY' ]
    const newArray = splice( array, 2, 1, 'USD1' )
    expect( newArray ).not.toBe( expectedNewArray )
    expect( newArray ).toEqual( expectedNewArray )
  } )
} )

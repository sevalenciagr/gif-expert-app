import { screen, render } from "@testing-library/react";
import { GrifItem } from "../../src/components/GrifItem";

describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    const url = 'http://one-punch.com/saitama.jpg';

    test('Debe de hacer match con el snapshot', () => {
    
        const { container } = render( <GrifItem title={ title } url={ url } /> )
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => { 

        render( <GrifItem title={ title } url={ url } /> );
        // screen.debug();
        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').alt).toBe( title );

        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
        
     })

     test('Debe mostrar el titulo en el componente', () => { 

        render( <GrifItem title={ title } url={ url } /> );
        expect( screen.getByText( title )).toBeTruthy();
      })

})
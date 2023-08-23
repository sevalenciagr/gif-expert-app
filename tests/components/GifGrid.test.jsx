import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch';

    test('Debe mostrar el loading inicialmente', () => { 

        render( <GifGrid category = { category } /> );
        expect( screen.getByText('Loading...') );
     })

 })
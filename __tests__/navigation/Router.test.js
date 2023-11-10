import React from 'react';
import { render, waitFor, act } from '@testing-library/react-native';
import { Auth } from 'aws-amplify';

// Importa el componente Router
import Router from '../../src/navigation/Router.js';

// Mockear Auth.currentAuthenticatedUser para evitar llamadas a la API de autenticación de Amplify
jest.mock('aws-amplify');

describe('Router', () => {
    it('renders loading indicator when user is undefined', async () => {
        Auth.currentAuthenticatedUser.mockImplementationOnce(() => {
            throw new Error('User not authenticated');
        });
        
        const { getByTestId } = render(<Router />);
        
        await act(async () => {
            // Verifica que se muestre el indicador de carga
            expect(getByTestId('loading-indicator')).toBeDefined();
        });
    });
      

    it('renders home screen when user is authenticated', async () => {
        Auth.currentAuthenticatedUser.mockImplementationOnce(() => ({
        // Datos de usuario autenticado simulados
        username: 'testUser',
        // Otros datos según tu necesidad
        }));

        const { queryByTestId, getByTestId } = render(<Router />);

        // Verifica que no se muestre el indicador de carga
        await waitFor(() => expect(queryByTestId('loading-indicator')).toBeNull());

        // Verifica que se muestre el componente HomeTabNavigator
        await waitFor(() => expect(getByTestId('home-tab-navigator')).toBeDefined());
    });

  it('renders authentication screens when user is not authenticated', async () => {
    Auth.currentAuthenticatedUser.mockImplementationOnce(() => null);

    const { queryByTestId, getByTestId } = render(<Router />);

    // Verifica que no se muestre el indicador de carga
    await waitFor(() => expect(queryByTestId('loading-indicator')).toBeNull());

    // Verifica que se muestren los componentes de autenticación
    await waitFor(() => expect(getByTestId('sign-in-screen')).toBeDefined());
    await waitFor(() => expect(getByTestId('sign-up-screen')).toBeDefined());
    // Añade más verificaciones según tus pantallas de autenticación
  });

  // Puedes añadir más pruebas según sea necesario
});

import React from 'react'
import SharedTransition from '../src/screens/SharedTransition';
import DetailsPage from '../src/screens/SharedTransition/DetailsPage';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

const SharedTransactionNaviagtion = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="SharedTransition" component={SharedTransition} />
            <Stack.Screen name="DetailsPage"
                component={DetailsPage}
                options={{ headerShown: false }}
                sharedElements={(route, otherRoute, showing) => {
                    const { character } = route.params;
                    return [`image` + character.id];
                }}
            />
        </Stack.Navigator>
    )
}

export default SharedTransactionNaviagtion

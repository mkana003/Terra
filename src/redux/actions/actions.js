import { types } from "./types";

export const requestConfiguration = (colorScheme) => {
    return {
        type: types.Request_configuration,
        colorScheme: colorScheme
    }
}

export const receiveConfiguration = (colorScheme) => {
    return {
        type: types.Receive_configuration,
        colorScheme,
    }
}
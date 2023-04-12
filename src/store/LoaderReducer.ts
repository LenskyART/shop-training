import { IActionLoader } from '../models';

interface ILoaderState {
  load: boolean;
}

const defState: ILoaderState = {
  load: true
};

export const LoaderReducer = (state = defState, action: IActionLoader) => {
  switch (action.type) {
    case 'IS_LOADER':
      return { ...state, load: action.payload };
    default:
      return state;
  }
};

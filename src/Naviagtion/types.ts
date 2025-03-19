// navigation/types.ts
import { StackScreenProps } from '@react-navigation/stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
// import { HOME_STACK } from './AppStack';
import { PROFILE_SCREEN } from '../screens/ProfileScreen';
import { HOME_SCREEN } from '../screens/HomeScreen';
import { PEST_HOME } from '../screens/Pest Identification/PestHome'; // Import the PestHome screen
import { PREDICTION_SCREEN } from '../screens/Pest Identification/PredictionScreen';
import { PADDY_PREDICTION_SCREEN } from '../screens/Paddy Classification/PaddyPredictionScreen';
import { TAB_STACK } from './RootNaviagtor';
import { CLASSIFICATION_HOME } from '../screens/Paddy Classification/ClassificationHome';


export type NavigatorParamList = {
  [TAB_STACK]: undefined;
  [PEST_HOME]: undefined; // Add the PestHome screen
  [PREDICTION_SCREEN]: { imageUri: string };
  [PADDY_PREDICTION_SCREEN]: { imageUri: string };
  [CLASSIFICATION_HOME]: undefined;
};

export type TabNavigatorParamList = {
  // HOME_STACK: undefined;
  [HOME_SCREEN]: undefined;
  [PROFILE_SCREEN]: undefined;
};

export type TabStackProps = StackScreenProps<
  NavigatorParamList,
  typeof TAB_STACK
>;

export type PestHomeProps = StackScreenProps<
  NavigatorParamList,
  typeof PEST_HOME
>;
export type PredictionScreenProps = StackScreenProps<
  NavigatorParamList,
  typeof PREDICTION_SCREEN
>;

export type PaddyPredictionScreenProps = StackScreenProps<
  NavigatorParamList,
  typeof PADDY_PREDICTION_SCREEN
>;

export type ClassificationHomeProps = StackScreenProps<
  NavigatorParamList,
  typeof CLASSIFICATION_HOME
>;
// export type HomeStackProps = BottomTabScreenProps<
//   TabNavigatorParamList,
//   typeof HOME_STACK
// >;

export type ProfileScreenProps = BottomTabScreenProps<
  TabNavigatorParamList,
  typeof PROFILE_SCREEN
>;
export type HomeScreenProps = BottomTabScreenProps<
  TabNavigatorParamList,
  typeof HOME_SCREEN
>;



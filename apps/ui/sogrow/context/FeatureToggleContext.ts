import React from 'react'
import { FeatureToggles } from '../config/featureToggle.type'

const defaultFeatureToggles: FeatureToggles = {
  useSocialLogin: false,
}

const FeatureToggleContext = React.createContext<FeatureToggles>(defaultFeatureToggles)

export default FeatureToggleContext

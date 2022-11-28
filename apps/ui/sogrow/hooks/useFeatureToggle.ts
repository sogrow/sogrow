import { FeatureToggles } from '../config/featureToggle.type'
import FeatureToggleContext from '../context/FeatureToggleContext'
import React from 'react'

export function useFeatureToggle(featureToggle: keyof FeatureToggles) {
  const featureToggles = React.useContext(FeatureToggleContext)
  return featureToggles[featureToggle]
}

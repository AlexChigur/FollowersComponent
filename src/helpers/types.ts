export type FollowersType = {
  displaySettings: DisplaySettingsType,
  elements: ElementType[]
}


export type DisplaySettingsType = {
  subType: string,
  type: string
}

export type ElementType = {
  type: string,
  condition: Condition,
  onFail?: FailType
  onMatch: MatchType | null
}

export type Condition = {
  entity: string,
  field: string,
  operand: string,
  value: number,
}

export type FailType = {
  action: string
}

export type MatchType = {
  action?: string,
  target?: string
}

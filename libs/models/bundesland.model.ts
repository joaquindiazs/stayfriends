export class BundeslandModel {
  accountDeactivated?: boolean;
  stateList?: State[];
  personIndexCounts?: any;
  redirect?: boolean;
  shpwMewTooltip?: boolean;
}

class State {
  count?: number;
  foreignCountry?: boolean;
  letter?: string;
  name?: string;
  schoolCount?: number;
  stadtStaat?: boolean;
  url?: string;
}


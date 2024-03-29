//
// this is the data structure as returned by Tantalis
//
export class Feature {
  _id: string;
  type: string;
  geometry: {
    type: string;
    geometries: [
      {
        type: string;
        coordinates: any;
      }
    ];
  };
  properties: {
    CODE_CHR_STAGE: string;
    CROWN_LANDS_FILE: string;
    DISPOSITION_TRANSACTION_SID: number;
    FEATURE_AREA_SQM: number;
    FEATURE_CODE: string;
    FEATURE_LENGTH_M: number;
    INTRID_SID: number;
    OBJECTID: number;
    RESPONSIBLE_BUSINESS_UNIT: string;
    SW_ANNO_CAD_DATA: any; // TODO: what type is this?
  };

  constructor(obj?: any) {
    this._id = (obj && obj._id) || null;
    this.type = (obj && obj.type) || null;
    this.geometry = (obj && obj.geometry) || null;
    this.properties = (obj && obj.properties) || null;
  }
}

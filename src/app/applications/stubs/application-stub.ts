import { Application } from 'app/models/application';

        export const singleApplicationStub: Application =
         new Application(
        {
        '_id': 123456789,
        'agency': 'Crown Land Allocation',
        'areaHectares': 9.19,
        'businessUnit': 'SK - LAND MGMNT - SKEENA FIELD OFFICE',
        'centroid': [
            -128.2898393371777,
            54.019088770013575
          ],
        'cl_file': '6406200',
        'clFile': '6406201',
        'client': 'Licensee Forest company',
        '_createdBy': 'idir\\mmedeiro',
        'createdDate': '2021-01-10',
        'description': 'A high-level description of this application.',
        'isDeleted': false,
        'legalDescription': 'A detailed description of the subject land.',
        'location': 'Porcher Island',
        'name': '6406200',
        'publishDate': '2018-11-07T21:59:58.000Z',
        'status': 'ACCEPTED',
        'reason': 'OFFER NOT ACCEPTED',
        'type': 'LICENCE',
        'subtype': 'LICENCE OF OCCUPATION',
        'tantalisID': 926028,
        'tenureStage': 'APPLICATION',
        'cpStatus': 'OPEN',
        'currentPeriod': 20,
        'meta': {
            'region': 'Cariboo',
            'cpStatusStringLong': 'Approved',
            'clFile': '123456789',
            'applicants': 'Me applying',
            'numComments': 3,
            // retireDate: Date;
            'isRetired': false,
            // isPublished: boolean;
            // isCreated: boolean;
            }
        });


    export  const singleApplicationStubArray: Application[] =  [
    new Application({
        '_id': 123456789,
        'agency': 'Crown Land Allocation',
        'areaHectares': 9.19,
        'businessUnit': 'SK - LAND MGMNT - SKEENA FIELD OFFICE',
        'centroid': [
            -128.2898393371777,
            54.019088770013575
          ],
        'cl_file': 6406200,
        'clFile': '6406201',
        'client': 'Licensee Forest company1',
        '_createdBy': 'idir\\mmedeiro',
        'createdDate': '2021-01-10',
        'description': 'A high-level description of this application.',
        'isDeleted': false,
        'legalDescription': 'A detailed description of the subject land.',
        'location': 'Porcher Island',
        'name': '6406200',
        'publishDate': '2018-11-07T21:59:58.000Z',
        'status': 'ACCEPTED',
        'reason': 'OFFER NOT ACCEPTED',
        'type': 'LICENCE',
        'subtype': 'LICENCE OF OCCUPATION',
        'tantalisID': 926028,
        'tenureStage': 'APPLICATION',
        'cpStatus': 'OPEN',
        'meta': {
          'region': 'Cariboo',
          'cpStatusStringLong': 'Approved',
          'clFile': '123456789',
          'applicants': 'Me applying',
          'numComments': 3,
          // retireDate: Date;
          'isRetired': false,
          // isPublished: boolean;
          // isCreated: boolean;
        }
      })
  ];

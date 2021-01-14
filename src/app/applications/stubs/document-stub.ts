
import { Document } from 'app/models/document';

export const singleDocumentStub: Document = 
         new Document(
{
    "_id": "5ab560ea91b5ea001975f3dc",
    "_addedBy": "5ab3cd64999d65001916febb",
    "_application": "5be3605e21ad2500237d5e0f",
    "_decision": "5b22de2c0aefdc001950452b",
    "_comment": "5b0f6ef343cf9c0019391cec",
    "documentFileName":"6406200_Referral_Maps.PDF",
    "displayName": "6406200_Referral_Maps.PDF",
    "internalURL" : "./uploads/6383043941972836352.pdf",
    "internalMime": "application/pdf"
});

export  const singleDocumentStubArray: Document[] =  [
    new Document({
        "_id": "5ab560ea91b5ea001975f3dc",
    "_addedBy": "5ab3cd64999d65001916febb",
    "_application": "5be3605e21ad2500237d5e0f",
    "_decision": "5b22de2c0aefdc001950452b",
    "_comment": "5b0f6ef343cf9c0019391cec",
    "documentFileName":"6406200_Referral_Maps.PDF",
    "displayName": "6406200_Referral_Maps.PDF",
    "internalURL" : "./uploads/6383043941972836352.pdf",
    "internalMime": "application/pdf"
      }),
      new Document({
        "_id": "5ab560ea91b5ea0019752222",
    "_addedBy": "5ab3cd64999d65001916febb",
    "_application": "5be3605e21ad2500237d5e0f",
    "_decision": "5b22de2c0aefdc001950452b",
    "_comment": "5b0f6ef343cf9c0019391cec",
    "documentFileName":"6406200_Referral_Maps_2.PDF",
    "displayName": "6406200_Referral_Maps_2.PDF",
    "internalURL" : "./uploads/6383043941972836322.pdf",
    "internalMime": "application/pdf"
      })
  ]; 

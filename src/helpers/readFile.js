import ASN1 from "@lapo/asn1js";

export function readFile(reader, searchHelper) {
  const obj = {
    common: "",
    isuer: "",
    validFrom: "",
    validTo: "",
  };
  const result = ASN1.decode(reader.result);
  if (result.typeName() !== "SEQUENCE") {
    console.log("Неправильна структура конверта сертифіката (очікується SEQUENCE)");
    return;
  }

  const tbsCertificate = result.sub[0];
  const subs = tbsCertificate.sub;
  subs.forEach((sub, i) => {
    if (i === 3) {
      const data = sub.toPrettyString();
      const res = searchHelper(data, "2.5.4.3", "UTF8String");
      obj.isuer = res;
    }
    if (i === 4) {
      const data = sub.toPrettyString();
      const [from, to] = searchHelper(data, "time", "UTCTime");
      obj.validFrom = from;
      obj.validTo = to;
    }
    if (i === 5) {
      const data = sub.toPrettyString();
      const res = searchHelper(data, "2.5.4.3", "UTF8String");
      obj.common = res;
    }
  });
  return obj;
}

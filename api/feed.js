export default function handler(req, res) {
  try {
    res.status(200).json({
      Builders: {
        Corporation: [
          {
            CorporateBuilderNumber: ["AspenHomesTemplate"],
            CorporateState: ["KS"],
            CorporateName: ["Aspen Homes Template"],
            CorporateReportingEmail: ["feeds@builderdesigns.com"],
            Specialties: [
              {
                Specialty: [
                  {
                    "_": "1",
                    "$": {
                      Type: "CustomHomes"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    });
  } catch (err) {
    console.error("❌ JSON error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

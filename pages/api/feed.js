export default function handler(req, res) {
  res.status(200).json({
    "Builders": {
      "Corporation": [
        {
          "Name": "Aspen Homes",
          "Phone": "913-555-2811",
          "Email": "sales@aspenhomes.com",
          "Website": "https://aspenhomes.com"
        }
      ]
    },
    "Subdivisions": {
      "Subdivision": [
        {
          "Name": "Meadow Glen",
          "City": "Olathe",
          "State": "KS",
          "Zip": "66062",
          "BuilderName": "Aspen Homes"
        },
        {
          "Name": "Willow Creek",
          "City": "Lenexa",
          "State": "KS",
          "Zip": "66220",
          "BuilderName": "Aspen Homes"
        }
      ]
    },
    "Plans": {
      "Plan": [
        {
          "Name": "The Aspen",
          "Bedrooms": 4,
          "Bathrooms": 3,
          "SqFt": 2500,
          "SubdivisionName": "Meadow Glen"
        },
        {
          "Name": "The Timberline",
          "Bedrooms": 3,
          "Bathrooms": 2.5,
          "SqFt": 2200,
          "SubdivisionName": "Willow Creek"
        }
      ]
    },
    "Specs": {
      "Spec": [
        {
          "Address": "123 Meadow Ln",
          "City": "Olathe",
          "State": "KS",
          "Zip": "66062",
          "Price": 450000,
          "PlanName": "The Aspen"
        },
        {
          "Address": "456 Creekside Dr",
          "City": "Lenexa",
          "State": "KS",
          "Zip": "66220",
          "Price": 475000,
          "PlanName": "The Timberline"
        }
      ]
    }
  });
}

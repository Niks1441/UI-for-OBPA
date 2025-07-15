import { ChevronDownIcon, FilterIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

export const OpportunitiesSection = (): JSX.Element => {
  // FilterIcon sections data
  const filterSections = [
    { id: "geo", title: "Geo Filters" },
    { id: "product", title: "Product Filters" },
    { id: "date", title: "Date Filters" },
    { id: "additional", title: "Additional Filters" },
  ];

  // Product brands data for the toggle group
  const productBrands = [
    "Chico",
    "JUMBO",
    "COMP",
    "Chico",
    "JUMBO",
    "COMP",
    "Chico",
    "JUMBO",
    "Chico",
    "JUMBO",
    "COMP",
    "Chico",
  ];

  // Chart data for the bar chart
  const barChartData = [
    { value: 50, label: "50", position: 51 },
    { value: 61, label: "61", position: 128 },
    { value: 105, label: "105", position: 205 },
    { value: 146, label: "146", position: 282 },
    { value: 58, label: "58", position: 359 },
    { value: 110, label: "110", position: 436 },
    { value: 145, label: "145", position: 513 },
    { value: 70, label: "70", position: 590 },
    { value: 125, label: "125", position: 667 },
    { value: 65, label: "65", position: 744 },
    { value: 120, label: "120", position: 821 },
    { value: 175, label: "175", position: 898 },
    { value: 70, label: "70", position: 975 },
  ];

  // Price points data for the bar chart
  const pricePoints = [
    { label: "295", position: 70 },
    { label: "279", position: 146 },
    { label: "210", position: 217 },
    { label: "240", position: 294 },
    { label: "224", position: 371 },
    { label: "200", position: 448 },
    { label: "241", position: 527 },
    { label: "229", position: 605 },
    { label: "176", position: 679 },
    { label: "231", position: 761 },
    { label: "183", position: 833 },
    { label: "200", position: 910 },
    { label: "229", position: 988 },
  ];

  // Stats data for the table
  const statsData = [
    {
      label: "$ Mix %",
      values: [
        "3%",
        "79%",
        "9%",
        "6%",
        "82%",
        "3%",
        "11%",
        "94%",
        "5%",
        "74%",
        "6%",
        "14%",
        "93%",
      ],
    },
    {
      label: "Growth",
      values: [
        "44%",
        "59%",
        "47%",
        "-13%",
        "54%",
        "45%",
        "-9%",
        "69%",
        "++",
        "-18%",
        "88%",
        "57%",
        "++",
      ],
      isGrowth: true,
    },
    {
      label: "$ Sales",
      values: [
        "270",
        "6,688",
        "781",
        "526",
        "916",
        "38",
        "124",
        "1,476",
        "77",
        "1,570",
        "136",
        "305",
        "3,269",
      ],
    },
    {
      label: "% Share",
      values: [
        "2%",
        "40%",
        "5%",
        "3%",
        "6%",
        "0%",
        "1%",
        "9%",
        "0%",
        "9%",
        "1%",
        "2%",
        "20%",
      ],
    },
  ];

  // Price points data for the Magic Price Point section
  const magicPricePointData = [
    { range: "0-10", ry2024: "1%", ry2025: "3%", growth: "110%" },
    { range: "10-20", ry2024: "24%", ry2025: "25%", growth: "4%" },
    { range: "20-30", ry2024: "38%", ry2025: "30%", growth: "-21%" },
    { range: "30-40", ry2024: "12%", ry2025: "19%", growth: "57%" },
    { range: "40-50", ry2024: "11%", ry2025: "11%", growth: "3%" },
    { range: "50-60", ry2024: "8%", ry2025: "9%", growth: "8%" },
    { range: "60-70", ry2024: "4%", ry2025: "2%", growth: "-58%" },
    { range: "70-80", ry2024: "1%", ry2025: "1%", growth: "18%" },
    { range: "80-90", ry2024: "0%", ry2025: "0%", growth: "-37%" },
    { range: "90-100", ry2024: "0%", ry2025: "0%", growth: "-2%" },
    { range: "100-110", ry2024: "0%", ry2025: "0%", growth: "-79%" },
    { range: "110-120", ry2024: "0%", ry2025: "0%", growth: "-76%" },
    { range: "120+", ry2024: "0%", ry2025: "0%", growth: "-55%" },
  ];

  // Product data for the price ladder
  const productData = [
    {
      price: "$70",
      leftSOM: "0",
      rightSOM: "0",
      products: [
        {
          side: "right",
          name: "12X-FAMILIAR",
          weight: "284.36 GR",
          price: "$246",
          ppValue: "0.00Pp",
          srp: "$70",
          image: "/image-10.png",
        },
      ],
    },
    {
      price: "$51",
      leftSOM: "0.1",
      rightSOM: "0",
      products: [
        {
          side: "left",
          name: "12X-FAMILIAR",
          weight: "161.28 GR",
          price: "$316.22",
          ppValue: "0.00Pp",
          srp: "$0",
          image: "/image-11.png",
        },
        {
          side: "left",
          name: "12X-FAMILIAR",
          weight: "222.36 GR",
          price: "$228.73",
          ppValue: "0.00Pp",
          srp: "$52",
          image: "/image-9.png",
        },
      ],
    },
    {
      price: "$48",
      leftSOM: "0",
      rightSOM: "1.37",
      products: [
        {
          side: "right",
          name: "12X-FAMILIAR",
          weight: "169.79 GR",
          price: "$286",
          ppValue: "0.00Pp",
          srp: "$48",
          image: "/image-12.png",
        },
      ],
    },
    {
      price: "$33",
      leftSOM: "0.26",
      rightSOM: "0",
      products: [
        {
          side: "left",
          name: "11X-COMPARTE",
          weight: "105.28 GR",
          price: "$314",
          ppValue: "0.00Pp",
          srp: "$0",
          image: "/image-11.png",
        },
        {
          side: "left",
          name: "11X-COMPARTE",
          weight: "145.36 GR",
          price: "$226",
          ppValue: "0.00Pp",
          srp: "$34",
          image: "/image-9.png",
        },
      ],
    },
    {
      price: "$22",
      leftSOM: "1.96",
      rightSOM: "0",
      products: [
        {
          side: "left",
          name: "09X-JUMBO",
          weight: "104.92 GR",
          price: "$207",
          ppValue: "0.00Pp",
          srp: "$22",
          image: "/image-9.png",
        },
        {
          side: "left",
          name: "09X-JUMBO",
          weight: "145.74 GR",
          price: "$226",
          ppValue: "0.00Pp",
          srp: "$0",
          image: "/image-11.png",
        },
      ],
    },
    {
      price: "$17",
      leftSOM: "11.05",
      rightSOM: "5.18",
      products: [
        {
          side: "right",
          name: "12X-FAMILIAR",
          weight: "284.36 GR",
          price: "$246",
          ppValue: "0.00Pp",
          srp: "$70",
          image: "/image-12.png",
        },
      ],
    },
  ];

  // FilterIcon options for the dropdowns
  const filterOptions = [
    { label: "Channel:", value: "DTS" },
    { label: "Region:", value: "ALL" },
    { label: "Store Segment:", value: "CKY-SANDWICH" },
    { label: "Brand:", value: "EMPERADOR, GIRO", hasMore: true },
  ];

  return (
    <ScrollArea className="flex flex-col w-full h-[calc(100vh-242px)] gap-5 overflow-hidden">
      <div className="flex flex-col p-5 space-y-8">
        {/* Filters Card */}
        <Card className="w-full bg-white shadow-md">
          <CardContent className="p-5">
            <div className="flex items-center justify-between w-full mb-8">
              <div className="flex items-center gap-2">
                <div className="relative w-7 h-7">
                  <FilterIcon className="w-5 h-5 text-[#015ea5]" />
                </div>
                <span className="font-bold text-xl text-[#015ea5] tracking-[0.40px]">
                  Filters
                </span>
              </div>
              <Button
                variant="default"
                className="h-6 px-2.5 py-2 text-[10px] font-bold bg-[#f77b36] text-white rounded-lg"
              >
                Clear FilterIcon
              </Button>
            </div>

            <div className="flex flex-col gap-5">
              {filterSections.map((section) => (
                <Accordion
                  key={section.id}
                  type="single"
                  collapsible
                  className="w-full"
                >
                  <AccordionItem value={section.id} className="border-none">
                    <AccordionTrigger className="py-0 hover:no-underline">
                      <div className="font-bold text-secondary-1 text-base tracking-[0.40px]">
                        {section.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      {/* FilterIcon content would go here */}
                    </AccordionContent>
                  </AccordionItem>
                  <Separator className="mt-5" />
                </Accordion>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* White Spaces Card */}
        <Card className="w-full bg-white shadow-md">
          <CardContent className="p-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-[38px] h-[38px] bg-app-secondary bg-opacity-5 rounded-[5.7px]">
                <div className="w-[19px] h-[19px] bg-[url(/vector-2.svg)] bg-[100%_100%]" />
              </div>
              <h2 className="font-bold text-[#015ea5] text-xl">
                Identification of White Spaces
              </h2>
            </div>

            <div className="flex flex-col space-y-4">
              {/* FilterIcon options */}
              <div className="flex items-center justify-end gap-4 mt-4">
                {filterOptions.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-secondary-1 text-xs font-semibold opacity-60">
                      {option.label}
                    </span>
                    <div className="relative w-[102px] h-[26px] bg-white rounded border border-solid border-[#d7d8d9] opacity-65 flex items-center px-2.5">
                      <span className="font-bold text-secondary-1 text-[10px]">
                        {option.value}
                      </span>
                      {option.hasMore && (
                        <span className="opacity-50 font-bold text-secondary-1 text-[10px] ml-1">
                          +1
                        </span>
                      )}
                      <ChevronDownIcon className="w-2 h-[5px] absolute right-2" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart section */}
              <div className="relative w-full h-[429px] mt-4">
                <div className="absolute top-[265px] left-0 -rotate-90 text-gray-60 text-xs font-semibold">
                  Price / Unit
                </div>
                <div className="absolute top-[263px] right-0 -rotate-90 text-gray-60 text-xs font-semibold">
                  Price / Kg
                </div>

                <div className="relative w-full h-[429px] pl-10">
                  {/* Chart images */}
                  <div className="absolute top-0 left-[161px] w-[67px] h-[67px]">
                    <img
                      src="/image-21.png"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-1.5 left-[410px] w-[70px] h-[61px]">
                    <img
                      src="/image.png"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 left-[608px] w-[82px] h-[52px]">
                    <img
                      src="/image-1.png"
                      alt="Product"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute top-2 left-[792px] w-[82px] h-[52px]">
                    <img
                      src="/image-2.png"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-[7px] left-[960px] w-[82px] h-[52px]">
                    <img
                      src="/image-3.png"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Y-axis labels */}
                  <div className="absolute top-[39px] left-0 text-secondary-2 text-xs font-semibold">
                    40
                  </div>
                  <div className="absolute top-[76px] left-0 text-secondary-2 text-xs font-semibold">
                    35
                  </div>
                  <div className="absolute top-[123px] left-0 text-secondary-2 text-xs font-semibold">
                    30
                  </div>
                  <div className="absolute top-[165px] left-0 text-secondary-2 text-xs font-semibold">
                    25
                  </div>
                  <div className="absolute top-[207px] left-0 text-secondary-2 text-xs font-semibold">
                    20
                  </div>
                  <div className="absolute top-[249px] left-0 text-secondary-2 text-xs font-semibold">
                    15
                  </div>
                  <div className="absolute top-[291px] left-0 text-secondary-2 text-xs font-semibold">
                    10
                  </div>
                  <div className="absolute top-[333px] left-0 text-secondary-2 text-xs font-semibold">
                    5
                  </div>
                  <div className="absolute top-[333px] left-[1042px] text-secondary-2 text-xs font-semibold">
                    0
                  </div>

                  {/* Right Y-axis labels */}
                  <div className="absolute top-0 left-[1049px] text-secondary-2 text-xs font-semibold">
                    400
                  </div>
                  <div className="absolute top-[39px] left-[1049px] text-secondary-2 text-xs font-semibold">
                    350
                  </div>
                  <div className="absolute top-[81px] left-[1049px] text-secondary-2 text-xs font-semibold">
                    300
                  </div>
                  <div className="absolute top-[123px] left-[1049px] text-secondary-2 text-xs font-semibold">
                    250
                  </div>
                  <div className="absolute top-[165px] left-[1049px] text-secondary-2 text-xs font-semibold">
                    200
                  </div>
                  <div className="absolute top-[207px] left-[1049px] text-secondary-2 text-xs font-semibold">
                    150
                  </div>
                  <div className="absolute top-[249px] left-[1049px] text-secondary-2 text-xs font-semibold">
                    100
                  </div>
                  <div className="absolute top-[291px] left-[1042px] text-secondary-2 text-xs font-semibold">
                    50
                  </div>

                  {/* Vertical grid lines */}
                  <div className="absolute top-0 left-[344px] w-px h-[341px] bg-gray-200"></div>
                  <div className="absolute top-0 left-[574px] w-px h-[341px] bg-gray-200"></div>
                  <div className="absolute top-0 left-[728px] w-px h-[341px] bg-gray-200"></div>
                  <div className="absolute top-0 left-[959px] w-px h-[341px] bg-gray-200"></div>

                  {/* Horizontal zero line */}
                  <div className="absolute top-[335.5px] left-[11px] w-[1026px] h-px bg-gray-200"></div>

                  {/* Bar chart */}
                  {barChartData.map((item, index) => (
                    <div
                      key={index}
                      className="absolute w-12 h-[106px] bg-[#7dc1e1]"
                      style={{
                        height: `${item.value * 1.9}px`,
                        top: `${342 - item.value * 1.9}px`,
                        left: `${item.position}px`,
                      }}
                    >
                      <div className="absolute top-[100%] left-3 mt-2 text-secondary-2 text-xs font-semibold">
                        {item.label}
                      </div>
                    </div>
                  ))}

                  {/* Price points */}
                  {pricePoints.map((item, index) => (
                    <div
                      key={index}
                      className="absolute font-bold text-black text-xs"
                      style={{
                        top: `${index % 2 === 0 ? 62 : 77 + (index % 4) * 15}px`,
                        left: `${item.position}px`,
                      }}
                    >
                      {item.label}
                    </div>
                  ))}

                  {/* Line chart dots */}
                  {pricePoints.map((item, index) => (
                    <div
                      key={index}
                      className="absolute w-2 h-2 bg-[#015ea5] rounded"
                      style={{
                        top: `${index % 2 === 0 ? 83 : 98 + (index % 4) * 15}px`,
                        left: `${item.position + 6}px`,
                      }}
                    ></div>
                  ))}

                  {/* Line chart */}
                  <img
                    className="absolute w-[924px] h-[97px] top-[88px] left-[75px]"
                    alt="Price trend line"
                    src="/vector-578.svg"
                  />
                </div>
              </div>

              {/* Toggle group for brands */}
              <div className="flex items-center mt-4 ml-16">
                <ToggleGroup type="multiple" className="flex flex-wrap">
                  {productBrands.map((brand, index) => (
                    <ToggleGroupItem
                      key={index}
                      value={`brand-${index}`}
                      className="h-[21px] px-6 py-1 bg-app-secondary text-white text-[10px] font-bold rounded-none"
                    >
                      {brand}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-2.5 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 bg-[#7dc1e1] rounded-[6.88px]"></div>
                  <span className="text-secondary-1 text-xs font-medium tracking-[-0.24px]">
                    Price Per Unit
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative h-2.5 w-[19px]">
                    <div className="absolute w-2.5 h-2.5 top-0 left-[5px] bg-[#015ea5] rounded-[4.91px]"></div>
                    <div className="absolute w-[19px] h-px top-[5px] left-0 bg-[#015ea5]"></div>
                  </div>
                  <span className="text-secondary-1 text-xs font-medium tracking-[-0.24px]">
                    Price Per Kg
                  </span>
                </div>
              </div>

              {/* Stats table */}
              <div className="w-full mt-4 rounded-[5.94px] border border-solid border-[#e8e8e8]">
                {statsData.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className={`flex w-full h-[38px] ${
                      rowIndex % 2 === 1 ? "bg-[#eaf6fb80]" : "bg-white"
                    }`}
                  >
                    <div className="w-[57px] flex items-center justify-center">
                      <span className="font-bold text-black text-xs text-center">
                        {row.label}
                      </span>
                    </div>
                    <Separator orientation="vertical" />

                    {row.values.map((value, colIndex) => (
                      <React.Fragment key={colIndex}>
                        <div className="flex-1 flex items-center justify-center">
                          <span
                            className={`font-semibold text-xs text-center ${
                              row.isGrowth && value.includes("-")
                                ? "text-t-2"
                                : row.isGrowth && !value.includes("-")
                                  ? "text-t-1"
                                  : "text-black"
                            }`}
                          >
                            {value}
                          </span>
                        </div>
                        {colIndex < row.values.length - 1 && (
                          <Separator orientation="vertical" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Premiumization/Value Opportunities Card */}
        <Card className="w-full bg-white shadow-md">
          <CardContent className="p-5">
            <div className="flex items-center gap-4 mb-8">
              <img
                src="/frame-1547754339.svg"
                alt="Frame"
                className="w-[38px] h-[38px]"
              />
              <h2 className="font-bold text-[#015ea5] text-xl">
                Premiumization/Value Opportunities
              </h2>
            </div>

            {/* Price Ladder vs Unit Mix */}
            <div className="mb-8">
              <h3 className="font-bold text-black text-lg mb-4">
                Price Ladder vs Unit Mix
              </h3>
              <Separator className="mb-6" />

              <div className="flex justify-between mb-2">
                <div className="font-bold text-black text-sm text-center">
                  SOM($)
                </div>
                <div className="flex items-center gap-1">
                  <Separator className="w-[22px]" />
                  <span className="font-bold text-black text-sm text-center">
                    SRP/SOP
                  </span>
                  <Separator className="w-[22px]" />
                </div>
                <div className="font-bold text-black text-sm text-center">
                  SOM($)
                </div>
              </div>

              <div className="flex mb-4">
                <div className="w-[201px] h-[49px] flex">
                  <img
                    src="/image-11-1.png"
                    alt="Product"
                    className="w-[62px] h-[34px] object-cover"
                  />
                  <div className="ml-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-medium">Selected</span>
                      <span className="font-medium">/</span>
                      <span className="font-medium">Total</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <span className="font-medium">13.37</span>
                      <span className="font-medium">/</span>
                      <span className="font-medium">60.73</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <span className="font-medium">0.00pp</span>
                      <span className="font-medium">/</span>
                      <span className="font-medium text-[#1acd70]">
                        +60.73pp
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1"></div>

                <div className="w-[201px] h-[49px] flex">
                  <img
                    src="/image-13.png"
                    alt="Product"
                    className="w-[62px] h-7"
                  />
                  <div className="ml-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-medium">Selected</span>
                      <span className="font-medium">/</span>
                      <span className="font-medium">Total</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <span className="font-medium">12.98</span>
                      <span className="font-medium">/</span>
                      <span className="font-medium">18.64</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <span className="font-medium">0.00pp</span>
                      <span className="font-medium">/</span>
                      <span className="font-medium text-t-1">+18.64pp</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price ladder products */}
              {productData.map((tier, index) => (
                <div key={index} className="flex w-full h-[67px] mb-2 relative">
                  <div className="w-[55px] flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-[#232121] text-sm font-semibold">
                        {tier.leftSOM}
                        <br />
                      </span>
                      <span className="text-[#868686] text-xs">0.00pp</span>
                    </div>
                  </div>

                  <div className="flex-1 flex">
                    {/* Left side products */}
                    <div className="flex-1 relative bg-[#015ea5] bg-opacity-20 rounded-md">
                      {tier.products
                        .filter((product) => product.side === "left")
                        .map((product, productIndex) => (
                          <div
                            key={productIndex}
                            className="absolute w-[156px] h-[61px] top-[3px] left-[122px]"
                            style={{
                              left:
                                productIndex === 0
                                  ? "122px"
                                  : productIndex === 1
                                    ? "281px"
                                    : "122px",
                            }}
                          >
                            <div className="relative h-[61px] rounded-[5.54px]">
                              <div className="absolute w-[156px] h-[61px] top-0 left-0 bg-[#015ea5] rounded-[5.54px] opacity-80" />
                              <div className="absolute w-[153px] h-[53px] top-1 left-0.5">
                                <Separator
                                  orientation="vertical"
                                  className="absolute h-[49px] top-0.5 left-[86px]"
                                />
                                <div className="absolute top-[38px] left-px font-bold text-white text-[10px] text-center">
                                  {product.name}
                                </div>
                                <div className="absolute top-px left-[93px] font-semibold text-white text-[10px] text-center">
                                  {product.weight}
                                </div>
                                <div className="absolute top-3.5 left-[93px] font-semibold text-white text-[10px] text-center">
                                  {product.price}
                                </div>
                                <div className="absolute top-[27px] left-[93px] font-semibold text-white text-[10px] text-center">
                                  {product.ppValue}
                                </div>
                                <div className="absolute top-10 left-[93px] font-semibold text-white text-[10px] text-center">
                                  {product.srp}
                                </div>
                                <img
                                  className="absolute w-[43px] h-9 top-0 left-0 object-cover"
                                  alt="Product"
                                  src={product.image}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* Center price */}
                    <div className="w-[84px] h-[67px] bg-[#015ea5] rounded-[0px_20px_0px_20px] flex items-center justify-center">
                      <div className="font-bold text-white text-base text-center">
                        {tier.price}
                      </div>
                    </div>

                    {/* Right side products */}
                    <div className="flex-1 relative bg-app-secondary bg-opacity-20 rounded-md">
                      {tier.products
                        .filter((product) => product.side === "right")
                        .map((product, productIndex) => (
                          <div
                            key={productIndex}
                            className="absolute w-[156px] h-[61px] top-[3px] left-[3px] bg-app-secondary rounded-[5.54px] opacity-70"
                          >
                            <Separator
                              orientation="vertical"
                              className="absolute h-[49px] top-[6px] left-[88px]"
                            />
                            <div className="absolute top-[42px] left-2.5 font-bold text-white text-[10px] text-center">
                              {product.name}
                            </div>
                            <div className="absolute top-[2px] left-[101px] font-semibold text-white text-[10px] text-center">
                              {product.weight}
                            </div>
                            <div className="absolute top-[15px] left-[101px] font-semibold text-white text-[10px] text-center">
                              {product.price}
                            </div>
                            <div className="absolute top-[28px] left-[101px] font-semibold text-white text-[10px] text-center">
                              {product.ppValue}
                            </div>
                            <div className="absolute top-[41px] left-[101px] font-semibold text-white text-[10px] text-center">
                              {product.srp}
                            </div>
                            <img
                              className="absolute w-[43px] h-9 top-[7px] left-[7px] object-cover"
                              alt="Product"
                              src={product.image}
                            />
                          </div>
                        ))}
                    </div>

                    <div className="w-[55px] flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-[#232121] text-sm font-semibold">
                          {tier.rightSOM}
                          <br />
                        </span>
                        <span className="text-[#868686] text-xs">0.00pp</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Action buttons */}
              <div className="flex justify-center mt-4">
                <Button className="w-10 h-10 p-[11px] bg-[#015ea5] rounded-[20px]">
                  <img
                    src="/icon-3.svg"
                    alt="Icon"
                    className="w-[18px] h-[18px]"
                  />
                </Button>
              </div>

              <div className="flex items-center gap-3.5 justify-center mt-4">
                {["Volume", "Ppv", "% Change In Som", "Sop"].map(
                  (label, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-[5px]"
                    >
                      <div className="flex flex-col w-[13px] h-[13px] items-start gap-[8.12px] px-[3.25px] py-[4.06px] bg-[#015ea5] rounded-[2.44px] border-[0.98px] border-solid border-[#015ea5]">
                        <img
                          className="w-[6.5px] h-[4.47px]"
                          alt="Icon"
                          src="/icon.svg"
                        />
                      </div>
                      <div className="font-semibold text-black text-xs tracking-[-0.24px]">
                        {label}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            <Separator className="my-8" />

            {/* Magic Price Point */}
            <div className="mb-8">
              <h3 className="font-bold text-black text-lg mb-4">
                Magic Price Point
              </h3>
              <Separator className="mb-6" />

              <div className="w-full rounded-[5.94px] border-[0.99px] border-solid border-[#e8e8e8]">
                <div className="w-full h-[42px] bg-[#015ea5] rounded-[5.94px_5.94px_0px_0px] flex items-center justify-center">
                  <div className="font-bold text-white text-sm">
                    ALL SEGMENT-ACROSS BRAND
                  </div>
                </div>

                <div className="w-full">
                  <div className="w-full h-[42px] bg-app-secondary flex items-center">
                    <div className="w-[298px] flex items-center justify-center">
                      <span className="font-bold text-white text-sm">
                        PRICE POINTS
                      </span>
                    </div>
                    <Separator orientation="vertical" className="h-[379px]" />
                    <div className="w-[256px] flex items-center justify-center">
                      <span className="font-bold text-white text-sm">
                        RY&apos;2024
                      </span>
                    </div>
                    <Separator orientation="vertical" className="h-[379px]" />
                    <div className="w-[256px] flex items-center justify-center">
                      <span className="font-bold text-white text-sm">
                        RY&apos;2025
                      </span>
                    </div>
                    <Separator orientation="vertical" className="h-[379px]" />
                    <div className="flex-1 flex items-center justify-center">
                      <span className="font-bold text-white text-sm">
                        Unit Growth%
                      </span>
                    </div>
                  </div>

                  <ScrollArea className="h-[351px]">
                    {magicPricePointData.map((item, index) => (
                      <div key={index} className="w-full">
                        <div className="flex h-10 items-center">
                          <div className="w-[298px] pl-[129px]">
                            <span className="font-medium text-black text-sm">
                              {item.range}
                            </span>
                          </div>
                          <div className="w-[256px] relative">
                            <div
                              className="h-6 bg-[#8dd3e5]"
                              style={{
                                width: `${
                                  Number.parseFloat(
                                    item.ry2024.replace("%", ""),
                                  ) * 6
                                }px`,
                              }}
                            ></div>
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 font-medium text-black text-xs">
                              {item.ry2024}
                            </span>
                          </div>
                          <div className="w-[256px] relative">
                            <div
                              className="h-6 bg-[#8dd3e5]"
                              style={{
                                width: `${
                                  Number.parseFloat(
                                    item.ry2025.replace("%", ""),
                                  ) * 6
                                }px`,
                              }}
                            ></div>
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 font-medium text-black text-xs">
                              {item.ry2025}
                            </span>
                          </div>
                          <div className="flex-1 relative">
                            <div
                              className={`h-6 ${
                                item.growth.includes("-")
                                  ? "bg-[#ff2727] rotate-180"
                                  : "bg-t-1"
                              }`}
                              style={{
                                width: `${
                                  Math.abs(
                                    Number.parseFloat(
                                      item.growth.replace("%", ""),
                                    ),
                                  ) * 1.2
                                }px`,
                              }}
                            ></div>
                            <span
                              className="absolute top-1/2 transform -translate-y-1/2 font-medium text-black text-xs"
                              style={{
                                right: item.growth.includes("-")
                                  ? "auto"
                                  : "4px",
                                left: item.growth.includes("-")
                                  ? "4px"
                                  : "auto",
                              }}
                            >
                              {item.growth}
                            </span>
                          </div>
                        </div>
                        <Separator className="my-2" />
                      </div>
                    ))}
                  </ScrollArea>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Price Index vs Share */}
            <div className="mb-8">
              <h3 className="font-bold text-black text-lg mb-4">
                Price Index vs Share
              </h3>
              <Separator className="mb-6" />

              <div className="flex items-center gap-2 justify-end mb-4">
                <span className="font-medium text-[#2f2f2f] text-xs whitespace-nowrap">
                  PPU
                </span>
                <div className="relative w-[25.31px] h-[25.31px] rotate-180">
                  <div className="relative w-[25px] h-4 top-[5px]">
                    <img
                      className="absolute w-[25px] h-4 top-0 left-0 -rotate-180"
                      alt="Toggle"
                      src="/vector-3.svg"
                    />
                    <img
                      className="absolute w-[13px] h-[13px] top-0.5 left-px -rotate-180"
                      alt="Toggle dot"
                      src="/ellipse-10.svg"
                    />
                    <img
                      className="absolute w-[13px] h-[13px] top-0.5 left-[11px] -rotate-180"
                      alt="Toggle dot"
                      src="/ellipse-10.svg"
                    />
                  </div>
                </div>
                <span className="font-semibold text-[#2f2f2f] text-xs whitespace-nowrap opacity-40">
                  PPK
                </span>
              </div>

              <div className="relative h-[370px]">
                {/* Y-axis labels */}
                <div className="absolute top-[1467px] left-[57px] font-semibold text-secondary-2 text-xs">
                  70.0%
                </div>
                <div className="absolute top-[1507px] left-[57px] font-semibold text-secondary-2 text-xs">
                  65.0%
                </div>
                <div className="absolute top-[1547px] left-[57px] font-semibold text-secondary-2 text-xs">
                  60.0%
                </div>
                <div className="absolute top-[1587px] left-[57px] font-semibold text-secondary-2 text-xs">
                  55.0%
                </div>
                <div className="absolute top-0 left-0 -rotate-90 font-semibold text-gray-60 text-xs">
                  Market Share
                </div>
                <div className="absolute top-[1667px] left-[58px] font-semibold text-secondary-2 text-xs">
                  45.0%
                </div>
                <div className="absolute top-[1707px] left-[57px] font-semibold text-secondary-2 text-xs">
                  40.0%
                </div>
                <div className="absolute top-[1747px] left-[57px] font-semibold text-secondary-2 text-xs">
                  35.0%
                </div>
                <div className="absolute top-[1787px] left-[57px] font-semibold text-secondary-2 text-xs">
                  30.0%
                </div>

                {/* X-axis labels */}
                <div className="absolute top-[1812px] left-[106px] font-semibold text-secondary-2 text-xs">
                  150
                </div>
                <div className="absolute top-[1812px] left-[244px] font-semibold text-secondary-2 text-xs">
                  170
                </div>
                <div className="absolute top-[1812px] left-[382px] font-semibold text-secondary-2 text-xs">
                  190
                </div>
                <div className="absolute top-[1812px] left-[520px] font-semibold text-secondary-2 text-xs">
                  210
                </div>
                <div className="absolute top-[1812px] left-[658px] font-semibold text-secondary-2 text-xs">
                  230
                </div>
                <div className="absolute top-[1812px] left-[796px] font-semibold text-secondary-2 text-xs">
                  250
                </div>
                <div className="absolute top-[1812px] left-[934px] font-semibold text-secondary-2 text-xs">
                  270
                </div>
                <div className="absolute top-[1812px] left-[1072px] font-semibold text-secondary-2 text-xs">
                  290
                </div>

                <div className="absolute top-[1837px] left-[525px] font-semibold text-gray-60 text-xs">
                  Price Index vs Competiton
                </div>

                {/* Scatter plot */}
                <img
                  src="/group-1000007240.png"
                  alt="Price Index vs Share Scatter Plot"
                  className="absolute w-[685px] h-[303px] top-0 left-[175px]"
                />

                {/* Axes */}
                <Separator
                  className="absolute w-[998px] h-px top-[335px] left-[106px]"
                  orientation="horizontal"
                />
                <Separator
                  className="absolute w-px h-[335px] top-0 left-[106px]"
                  orientation="vertical"
                />
              </div>
            </div>

            <Separator className="my-8" />

            {/* Profit Pool */}
            <div>
              <h3 className="font-bold text-black text-lg mb-4">Profit Pool</h3>
              <Separator className="mb-6" />

              <div className="flex items-center gap-[22px] justify-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 bg-primary-2 rounded-[6.88px]"></div>
                  <span className="font-medium text-secondary-1 text-xs tracking-[-0.24px]">
                    Pepsico Profit Pool Share
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 bg-gray rounded-[6.88px]"></div>
                  <span className="font-medium text-secondary-1 text-xs tracking-[-0.24px]">
                    Retailer Profit Pool Share
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-8">
                <div className="relative w-[195px] h-[195px]">
                  <img
                    src="/49--49--.svg"
                    alt="Profit Pool Chart"
                    className="w-full h-full"
                  />
                  <div className="absolute top-[90px] left-[15px] font-bold text-white text-xs tracking-[-0.24px]">
                    49%
                  </div>
                  <div className="absolute top-[90px] left-[158px] font-bold text-white text-xs tracking-[-0.24px]">
                    51%
                  </div>
                </div>

                <div className="relative w-[195px] h-[195px]">
                  <img
                    src="/39--39--.svg"
                    alt="Profit Pool Chart"
                    className="w-full h-full"
                  />
                  <div className="absolute top-[90px] left-[11px] font-bold text-white text-xs tracking-[-0.24px]">
                    39%
                  </div>
                  <div className="absolute top-[90px] left-[158px] font-bold text-white text-xs tracking-[-0.24px]">
                    61%
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
};

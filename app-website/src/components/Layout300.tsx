"use client";

import { useState } from "react";
import { ShopDef } from "../shopDefs";
import { ShopCard } from "./ShopCard";
import { Stack, Typography, Paper, ToggleButtonGroup, ToggleButton } from "@mui/material";

export interface Layout300Props {
  heading: string;
  shops: ShopDef[]
}

const SHOW_TYPES = ["販売", "ワークショップ", "ステージ", "5/31", "6/1"];

export function Layout300(props: Layout300Props) {
  // フィルターの値
  // 文字が入っていたら、表示する
  const [showTypes, setShowTypes] = useState<string[]>([...SHOW_TYPES]);

  const handleTypes = (
    _event: React.MouseEvent<HTMLElement>,
    newShowTypes: string[]
  ) => {
    setShowTypes(newShowTypes);
  };

  // フィルターによって表示するかどうか
  function isShown(shop: ShopDef) {
    if (!showTypes.includes("販売") && shop.hasMerchandise) return false;
    if (!showTypes.includes("ワークショップ") && shop.hasWorkshop) return false;
    if (!showTypes.includes("ステージ") && shop.isTalkShow) return false;
    if (!showTypes.includes("ステージ") && shop.isMusicLive) return false;

    if (showTypes.includes("5/31") && shop.openDates.includes("5/31")) return true;
    if (showTypes.includes("6/1") && shop.openDates.includes("6/1")) return true;
    
    return false;
  }
  
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 w-full max-w-lg items-start justify-between gap-5 md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-center text-5xl font-bold md:mb-6">
              {props.heading}
            </h2>
          </div>

          <Paper
            className="mb-12 p-2 ml-auto"
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              className="text-right"
            >
              <Typography variant="caption">フィルター</Typography>
              <hr />
              <ToggleButtonGroup
                value={showTypes}
                onChange={handleTypes}
                aria-label="filter shop types"
              >
                {SHOW_TYPES.map((type) => (
                  <ToggleButton value={type} key={type} aria-label={type}>
                    {type}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Stack>
          </Paper>

          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3">
            {props.shops.filter(isShown).map((shop, index) => (
              <ShopCard shop={shop} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


              {/*
              <div className="w-full" key={index}>
                <div className="mb-5 md:mb-6">
                  <img
                    src={shop.shopImageUrl}
                    alt={shop.shopName}
                    className="flex justify-center rounded-image"
                  />
                </div>
                <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                  {shop.shopName}
                </h3>
                <p className="text-center">
                  {shop.description.split("\n").map((line, index) => (
                    <span key={index}>{line}{index < shop.description.split("\n").length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
              */}
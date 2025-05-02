
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Chip,
    Stack,
    useMediaQuery,
} from '@mui/material';
import { BiLogoInstagram } from "react-icons/bi";
import { GoHome } from "react-icons/go";

import { ShopDef } from '../data/shops';

export interface ShopCardProps {
    shop: ShopDef;
}

export function ShopCard(props: ShopCardProps) {
    const isMobile = useMediaQuery('(max-width:600px)')

    return (
        <Card>
            <CardContent>
                <Stack direction="row" spacing={1}>
                    {props.shop.hasMerchandise && <Chip label="販売" color="info" size="small" />}
                    {props.shop.hasWorkshop && <Chip label={"ワークショップ"+(props.shop.requiresReservation?"（要予約）":"")} color="success" size="small" />}
                    {(props.shop.isTalkShow || props.shop.isMusicLive) && <Chip label="ステージ" color="warning" size="small" />}
                </Stack>
                {isMobile ? (
                    <Typography variant="h5">{props.shop.shopName}</Typography>
                ) : (
                    <Typography variant="h6">{props.shop.shopName}</Typography>
                )}
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {props.shop.openDates.join("、")}
                </Typography>
            </CardContent>
            <CardMedia>
                <img src={props.shop.shopImageUrl} alt={props.shop.shopName} />
            </CardMedia>
            <CardContent>
                <Typography variant="body2" sx={{ mb: 2 }}>
                    {props.shop.description}
                </Typography>
                <Stack direction="row" spacing={0.5} alignItems="center">
                    <BiLogoInstagram className="size-6" color="#66c" />
                    <a
                        href={`https://www.instagram.com/${props.shop.instagramHandle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                    >
                        {props.shop.instagramHandle}
                    </a>
                </Stack>
                {props.shop.url && (
                    <Stack direction="row" spacing={0.5} alignItems="center"
                        style={{
                            "marginTop": "5px",
                            "overflow": "hidden",
                            "wordBreak": "break-word",
                            "overflowWrap": "break-word",
                        }}
                    >
                        <GoHome className="size-6" color="#66c"
                            style={{
                                "width": "24px",
                                "height": "24px",
                                "minWidth": "24px",
                                "flexShrink": "0",
                            }}
                        />
                        <a
                            href={props.shop.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600"
                            style={{
                                "lineHeight": "1.1",
                            }}
                        >
                            {props.shop.url}
                        </a>
                    </Stack>
                )}
            </CardContent>
        </Card>
    );
}

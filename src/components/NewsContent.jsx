

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const API_KEY = '406ac09ff4201d59fdd160780b15a1e5'

export default function NewsContent() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en`)
            .then((res) => res.json())
            .then((data) => setNews(data.articles || []))
            .catch((err) => console.error(err));
    }, []);

    if (!news.length) return <Typography>Loading news...</Typography>;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                mx: "auto",
                mt: 2,
            }}
        >
            {news.map((article, index) => (
                <Card key={index} sx={{ display: "flex", flexDirection: "column" }}>
                    {article.image && (
                        <CardMedia
                            component="div"
                            sx={{
                                height: 300,
                                backgroundImage: `url(${article.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                    )}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {article.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {article.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}

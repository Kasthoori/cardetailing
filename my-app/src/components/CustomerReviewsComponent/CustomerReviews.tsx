import { FC, useEffect, useState } from "react";
import {Review} from './Review';
import { dummyReviews } from "./dummyReviews";
import {
    addDoc,
  collection,
  DocumentData,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  Timestamp,  
} from 'firebase/firestore';
import {db} from '../../firebase';
import { Box, Button, Card, CardContent, Rating, TextField, Typography} from "@mui/material";
import Grid from '@mui/material/Grid';

const PAGE_SIZE = 3;


const CustomerReviews:FC = () => {

    const [reviews, setReviews] = useState<Review[]>();
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState<number | null>(5)
    const [lastDoc, setLastDoc] = useState<DocumentData | null>(null);
    const [hasMore, setHasMore] = useState(true);

    // const fetchReviews = async (initial = false) => {
    //     let reviewsQuery = query(
    //         collection(db, "reviews"),
    //         orderBy("createdAt", "desc"),
    //         limit(PAGE_SIZE)
    //     );

    //     if (!initial && lastDoc) {
    //         reviewsQuery = query(
    //             collection(db, "reviews"),
    //             orderBy("createdAt", "desc"),
    //             startAfter(lastDoc),
    //             limit(PAGE_SIZE)
    //         );
    //     }

    //     const snapshot = await getDocs(reviewsQuery);
    //     const newReviews = snapshot.docs.map(doc => ({
    //         id: doc.id,
    //         ...doc.data(),
    //     })) as Review[];

    //     if (initial) {
    //         setReviews(newReviews);
    //     } else {
    //         setReviews(prev => [ ...(prev ?? []), ...newReviews ]);
    //     }

    //     const lastVisible = snapshot.docs[snapshot.docs.length - 1];
    //     setLastDoc(lastVisible);
    //     setHasMore(snapshot.docs.length === PAGE_SIZE);
    // };

    const fetchReviews = (initial = false) => {
        const start = initial ? 0 : (reviews?.length ?? 0);
        const nextSet = dummyReviews.slice(start, start + PAGE_SIZE);

        if (initial) {
            setReviews(nextSet);
        } else {
            setReviews(prev => [ ...(prev ?? []), ...nextSet ]);
        }
    };

    useEffect(() => {
        fetchReviews(true);
    }, []);

    // const handleSubmit = async (e:React.FormEvent) => {
    //     e.preventDefault();

    //     if (!name || !message || !rating) return;

    //     await addDoc(collection(db, "reviews"), {
    //         name,
    //         message,
    //         rating,
    //         createdAt: Timestamp.now().toDate(),
    //     });

    //     setName("");
    //     setMessage("");
    //     setRating(5);
    //     setLastDoc(null) // Reset Pagination
    //     fetchReviews(true) // Reload from start
    // };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !message || !rating) return;

        const newRiview: Review = {
            id: `${Date.now()}`,
            name,
            message,
            rating,
            createdAt: new Date(),
        };

        setReviews(prev => [newRiview, ...(prev ?? [])]);
        setName("");
        setMessage("");
        setRating(5);
    }

    return (
        <Box sx={{mt: 10, px: 2}}>
            <Typography variant="h4" gutterBottom textAlign="center">
                Customer Reviews
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    maxWidth: 600,
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    mb: 6
                }}
            >
                <TextField 
                    label="Your Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />

                <TextField 
                    label="Your Feedback"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    multiline
                    minRows={3}
                    required
                />
                
                <Rating 
                    value={rating}
                    onChange={(_, newValue) => setRating(newValue)}
                />

                <Button variant="contained" type="submit">
                    Submit Review
                </Button>
            </Box>
            <Grid container spacing={3}>
                {reviews?.map(r => (
                    <Grid item xs={12} md={6} lg={4} key={r.id}>
                       <Card elevation={3} component="section">
                         <CardContent>
                            <Typography variant="h6">{r.name}</Typography>
                            <Rating value={r.rating} readOnly />
                            <Typography sx={{mt: 1}}>{r.message}</Typography>
                            <Typography variant="caption" sx={{color: "gray"}}>
                                {new Date(r.createdAt).toLocaleDateString()}
                            </Typography>
                         </CardContent>
                       </Card>
                    </Grid>
                ))}
            </Grid>

            {hasMore && (
                <Box textAlign="center" mt={4}>
                    <Button onClick={() => fetchReviews()} variant="outlined">
                        Load More
                    </Button>
                </Box>
            )

            }

        </Box>
    );
}

export default CustomerReviews;
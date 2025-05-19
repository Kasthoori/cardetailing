import { FC, Fragment, useEffect, useRef, useState } from "react";
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
import { Box, Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Icon, IconButton, Rating, TextField, Typography} from "@mui/material";
import Grid from '@mui/material/Grid';
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const PAGE_SIZE = 3;


const CustomerReviews:FC = () => {

    const [reviews, setReviews] = useState<Review[]>();
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState<number | null>(5)
    const [lastDoc, setLastDoc] = useState<DocumentData | null>(null);
    const [hasMore, setHasMore] = useState(true);
    const [open, setOpen] = useState<boolean>(false);
    const scrollBoxRef = useRef<HTMLDivElement>(null)

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

        setHasMore(start + PAGE_SIZE < dummyReviews.length);
    };

    useEffect(() => {
        setReviews(dummyReviews);
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
        setOpen(false);
    }

    // scroll reviews

    const scroll = (direction: "left" | "right") => {
        if (scrollBoxRef.current) {
            const amount = 300;
            scrollBoxRef.current.scrollBy({
                left: direction === "left" ? -amount : amount,
                behavior: 'smooth',
            })
        }
    }

    return (
        <Box sx={{mt: 10, px: 2}}>
            <Typography variant="h4" gutterBottom textAlign="center">
                Testamonials
            </Typography>

            {/* Review Me Button */}
            <Box textAlign="center" my={2}>
                <Button variant="contained" onClick={() => setOpen(true)}>
                    Review Me
                </Button>
            </Box>

            {/* Review Form Dialogue */}
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Write a Review</DialogTitle>
               <DialogContent>
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
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                </DialogActions>
            </Box>
            </DialogContent>
            </Dialog>

            {/* Horizontal Scrollable Review Cards */}

            <Box sx={{position: 'relative', mt: 4, px: 6}}>
                <IconButton
                    sx={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 1,
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                    }} 
                    onClick={() => scroll("left")} 
                >
                    <ChevronLeft />
                </IconButton>

            <Box
                ref={scrollBoxRef}
                id="review-scroll-box"
                sx={{
                    display: "flex",
                    gap: 2,
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                    pb: 2,
                    '&::-webkit-scrollbar':{height: '6px'},
                    '&::-webkit-scrollbar-thumb' : {backgroundColor: '#ccc', borderRadius: '4px'},
                }}
            >
                {reviews?.map(r => (
                    <Card
                        key={r.id}
                        sx={{minWidth: 300, flexShrink: 0}}
                        elevation={3}
                    >
                        <CardContent>
                            <Typography variant="h6">{r.name}</Typography>
                            <Rating value={r.rating} readOnly />
                            <Typography sx={{mt: 1}}>{r.message}</Typography>
                            <Typography variant="caption" sx={{color: "gray"}}>
                                {new Date(r.createdAt).toDateString()}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            <IconButton
                sx={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 1,
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                }}
                onClick={() => scroll("right")}
            >
                <ChevronRight />
            </IconButton>
          </Box>

        </Box>
    );
}

export default CustomerReviews;
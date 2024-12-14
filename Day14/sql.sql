SELECT COUNT(DISTINCT(ge.receiver_id)) 
FROM gift_exchanges AS ge
INNER JOIN user_wishlists as uw ON ge.receiver_id = uw.user_id 
AND ge.gift_name = uw.gift_name
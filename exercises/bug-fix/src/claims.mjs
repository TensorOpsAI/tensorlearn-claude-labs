export function getClaim(claims,viewerId,claimId) {
 const id=x=>typeof x==='string'&&x.trim()?x.trim():null;
 const viewer=id(viewerId), target=id(claimId);
 if(!Array.isArray(claims)||!viewer||!target)return null;
 return claims.find(x=>x&&id(x.id)===target&&id(x.ownerId)===viewer)??null;
}

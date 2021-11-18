class Hand{
    constructor(owner){
        this.owner = owner
        this.cards = []

        this.cards[0] = new Card("Knight", this.owner)
        this.cards[1] = new Card("Guard Tower", this.owner)
        this.cards[2] = new Card("Fireball", this.owner)
    }
}

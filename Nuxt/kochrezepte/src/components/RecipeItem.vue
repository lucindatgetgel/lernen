<template>
    <div class="recipeItemContainer">
        <img
            class="recipe-image"
            :src="image"
        />
        <div class="right-side">
            <div>
                {{ label }}
            </div>
            <div class="bottom-row">
                {{ attributes }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecipeItem',
    data () {
        return {
            image: 'https://cdn-icons-png.flaticon.com/512/7754/7754328.png',
            label: 'Sushi Rolls',
            attributes: 'vegan, glutenfrei'
        }
    }
}

</script>

<style scoped>
.recipeItemContainer {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 8px;
    border-radius: 8px;
    margin: 8px;
    display: flex;
    gap: 8px;
    cursor: pointer;
}

.recipeItemContainer:hover {
    background-color: rgba(0, 0, 0, 0.05);
}


.recipe-image {
    height: 60px;
    width: auto;
    border-radius: 8px;
}

.right-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.bottom-row {
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
}
</style>

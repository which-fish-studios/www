<template>
  <div class="flex h-screen flex-col bg-gray-950">
    <!-- Title Section w/ Social Media Links -->
    <Banner>
      <div
        class="flex flex-col items-center justify-center space-y-4 p-8 text-white"
      >
        <h1 class="text-4xl md:text-6xl lg:text-8xl">Which Fish Studios</h1>

        <div class="inline-flex gap-2">
          <SocialLink
            title="Steam"
            path="https://store.steampowered.com/app/2907590/Magical_Manifest/"
          ></SocialLink>
          <SocialLink
            title="YouTube"
            path="https://www.youtube.com/@whichfishstudios"
          ></SocialLink>
          <SocialLink
            title="X"
            path="https://twitter.com/whichfishgames"
          ></SocialLink>
        </div>
      </div>
    </Banner>

    <!-- About Magical Manifest -->

    <div
      class="flex flex-col items-center justify-center space-y-4 bg-gray-950 p-8 text-white"
    >
      <h1 class="text-4xl md:text-5xl lg:text-8xl">Magical Manifest</h1>
      <h2 class="text-2xl md:text-3xl lg:text-4xl">
        Crazy Eights with a Deckbuilder Twist
      </h2>

      <p style="text-align: center; margin-left: 20px; margin-right: 20px">
        Enjoy classic Crazy Eights game play with a deckbuilder twist! Match
        cards by elemental suit or number. Compete with your wizard friends to
        empty your hand the fastest. Win by emptying your hand as quickly as
        possible, but watch as the losing players get rwarded by changing the
        deck to their favor. Change the shared deck as you play! Enchant cards
        to your advantage using runes from the shop. These runes turn normal
        cards into special cards that can skip players, burn cards permanently,
        and impact the game in numerous other magical ways. Buy new types of
        special cards from the shop. Create synergies between your hand and the
        deck by collecting relics, which only affect your hand. Make the deck
        advantageous to you while being a nuisance to your friends.
      </p>
    </div>

    <!-- Meet the Team -->

    <div>
      <div class="text-center">
        <h1 class="justify-center text-4xl text-white md:text-5xl lg:text-8xl">
          Meet the Team
        </h1>

        <TeamProfile
          :info="{
            name: 'Jeffrey Harmon',
            fish: 'Apogon',
            picture: '/apogon.png',
          }"
        >
          Jeffrey Harmon is one of five founders of Sphere Province Games, who
          published their debut game “Mission: Rovee” in the spring of 2024. He
          is a recent computer science graduate that has worked on a few other
          non-commercial projects such as HabiTile and STEM Career Game.
        </TeamProfile>
        <TeamProfile
          :info="{
            name: 'Hunter Johns',
            fish: 'Anglerfish',
            picture: '/angler.png',
          }"
        >
          Hunter is a computer science student with a background in a little bit
          of everything. He is primarily a developer for Which Fish Studios. He
          has worked on a few non-commercial games such as Snatch N Sniff.
        </TeamProfile>
        <TeamProfile
          :info="{
            name: 'Jadi Miller',
            fish: 'Wahoo',
            picture: '/wahoo.png',
          }"
        >
          Jadi is a computer science student who has published several
          non-commercial projects, including HabiTile and several smaller games
          on Itch. She also puts together and films all of Which Fish Studios'
          Youtube videos.
        </TeamProfile>
      </div>
    </div>
  </div>
</template>

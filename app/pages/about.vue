<script setup lang="ts"></script>

<template>
  <main>
    <section
      class="flex flex-col items-center justify-center container mx-auto py-10"
    >
      <h1 class="text-4xl font-bold mb-6">About Us</h1>

      <p class="text-lg mb-4">
        Welcome to our website! We are a team passionate about technology and
        innovation. Our goal is to bring the best digital solutions to our
        users.
      </p>

      <p class="text-lg mb-4">
        Founded in 2023, our mission is to build tools that make people's lives
        easier. We believe in the power of technology to transform the world.
      </p>

      <p class="text-lg mb-4">
        Our team is made up of dedicated developers, designers, and strategists,
        all sharing a vision of creating an amazing experience for all of our
        users.
      </p>

      <div class="flex items-center mt-6">
        <NuxtImg
          src="https://randomuser.me/api/portraits/women/76.jpg
"
          densities="1x"
          alt="Our Team"
          width="128px"
          height="128px"
          class="rounded-full mr-4"
          format="webp"
        />
        <div>
          <h2 class="text-2xl font-bold">Our Team</h2>
          <p class="text-lg">
            We are passionate about innovation and always strive to deliver the
            best to our users. Our team is constantly learning and evolving to
            provide the highest quality.
          </p>
        </div>
      </div>

      <div class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
        <p class="text-lg">
          If you have any questions or would like to learn more about our work,
          feel free to contact us.
        </p>
      </div>
    </section>
  </main>
</template>

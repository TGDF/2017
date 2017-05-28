<?php

return [

    /**
     * Edit this file in order to configure the additional
     * image sizes your theme's needs.
     * @link http://codex.wordpress.org/Function_Reference/add_image_size
     *
     * @key string The size name.
     * @param int $width The image width.
     * @param int $height The image height.
     * @param bool|array $crop Crop option. Since 3.9, define a crop position with an array.
     * @param bool|string $media Add to media selection dropdown. Make it also available to media custom field. If string, used as display name ;)
     */
    'post-thumbnail-small' => [374, 260, true, true],
    'post-thumbnail-large' => [480, 272, true, true],
    'post-thumbnail-full' => [1200, 444, true, true],
    'speaker-small' => [256, 256, true, true],
    'speaker-full' => [512, 512, true, true],
    'sponsor-logo' => [600, 400, true, true],
    'sponsor-logo-small' => [300, 200, true, true]
];

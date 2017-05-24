<?php

/*----------------------------------------------------*/
// Define environment type
/*----------------------------------------------------*/
return function() {
    // Check for the environment variable
    if ('yes' === getenv('DevMode')) {
      // Return the environment file slug name: .env.{$slug}
      return 'local';
    }

    // Else if no environment variable found... it might be a production environment...
    return 'production';
};

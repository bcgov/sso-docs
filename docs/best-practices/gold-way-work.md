---
title: Gold Custom Realm Community Ways of Working
---

import StandardRealmSvg from './images/standard_realm.svg';
import CustomRealmSvg from './images/custom_realm.svg';
import GuidelinesSvg from './images/guidelines.svg';
import BestPracticeSvg from './images/best_practice.svg'; 


<div className="intro-style"> 
   <h3> Welcome community member, we have this page broken down into the following sections:  </h3>
      <ul>
         <li> Standard vs Custom Service </li>
         <li> Custom Service 
            <ul>
               <li>Guidelines</li>
               <li>Best practices</li>
               <li>Common tool set</li> 
            </ul>
         </li>
      </ul> 
 </div>
   
   
 <div class="sso-image-card">
   <StandardRealmSvg />   
   <div class="card-text">
      <h2>Standard Realm: SSO team configures it for you</h2> 
      <hr />
      <div class="p-0 m-0">
         <h3>Services we provide:</h3>
         <ol class="yellowtick"> 
            <li>Self-registration</li>
            <li>20-minute access to a development,test, and production environment</li>
            <li>Continuous improvement & bug fixes</li>
            <li>Default settings</li>
            <li>Architecture best practices</li>
            <li>Access to developer support</li>
            <li>24/7 site reliability monitoring</li>
         </ol>
      </div>
   </div>
</div>

 <div class="sso-image-card">
   <CustomRealmSvg />   
   <div class="card-text">
      <h2>Custom Realm: Your team configures it youself</h2> 
      <hr />
      <div>
         <h3>Your responsibilities include:</h3>
            <ol class="yellowtick"> 
               <li>Governance model & decisions</li>
               <li>Infrastructure code for environment promotion</li>
               <li>Access considerations</li>
               <li>Migration of project teams that move ministries</li>
               <li>Dev-ops/ technical support- have a long term plan for it</li>
            </ol>
      </div>
   </div>
</div>



 <div class="sso-image-card">
   <GuidelinesSvg />
   <div class="card-text">
      <h2>Custom service guidelines </h2>
      <hr />
      <div>
         <h3>Follow guidelines for:</h3>
      </div>
      <ol class="yellowtick"> 
         <li>Everyone in the space understands business requirements for privacy (IDs, authorizations, personal attributes) </li>
         <li>For sharing purposes, need to review the STRA/security & PIA/privacy & legislation/policy for the space</li>
         <li>Rely on out of the box configuration for Keycloak integrations entirely.
            <ul>
               <li>Ensure logs not are stored or only store for a short period of time.</li>
            </ul>
         </li>
         <li>Try to avoid using realm-level resources such as groups and roles to share the realm with multiple application teams. </li>
         <li>Use of GUID vs KC ID. Don't use local users.</li>
         <li>Make sure the user username has a suffix with  `@IDP` and is based on the source of truth of the user type.
            <ul>
               <li>Offline validation (public key validation)</li>
               <li>Automation</li>
            </ul>
         </li>
         <li>Session and realm configuration and token timeouts
            <ul>
               <li>Ensure offline tokens are revoked after use or set the maximum time.</li>
               <li>Validate the token at the application level rather than using an introspection endpoint</li>
            </ul>
         </li>
         <li>Synchronization of changes between environments</li>
      </ol>
   </div>
</div>

 <div class="sso-image-card">
   <BestPracticeSvg />  
   <div class="card-text">
      <h2>Best practices </h2>
      <hr />
      <div>
         <h3>Do's</h3>
      </div>
      <ol class='greentick'> 
         <li>Create instruction for realm usage setup and basic problem solving</li>
         <li>Use cypress to automate login test</li>
         <li>Documentation around how to getaccess to different tiers of support</li>
         <li>Create a clear disaster recovery plan</li>
      </ol>
      <div><h3>Don'ts</h3></div>
      <ol class='redcross'> 
         <li>Introspection</li>
         <li>Using the IDIR/ BCeID user ID as the Keycloak username</li>
         <li>Manually promote Keycloak configuration through the environments</li>
      </ol>
   </div>
</div>

<div>
   <h1>Common tools</h1>
   <ul>
      <li>Automated testing (we recommend cypress)</li>
      <li>Visit our Example Repo: <a href="https://github.com/bcgov/keycloak-example-apps" target="_blank">https://github.com/bcgov/keycloak-example-apps</a></li>
   </ul>
   <h4>Have any questions? We would love to hear from you. <a href="https://chat.developer.gov.bc.ca/channel/sso">Rocketchat</a> OR <a href="mailto:bcgov.sso@gov.bc.ca">Email</a>
   </h4>
</div>
require "set"

def is_isogram word
  word.length == word.downcase.split("").to_set.length
  # or use .uniq instead of to_sets
end

p is_isogram("Dermatoglyphics") #//, true );
p is_isogram("isogram") #//, true );
p is_isogram("aba")# //, false, "same p ch_ars may not be adjacent" );
p is_isogram("moOse")# //, false, "same chars may not be same case" );
p is_isogram("isIsogram")# //, false );
p is_isogram("") #//, true, "an empty string is a valid isogram" );
